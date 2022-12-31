import Head from 'next/head';
import Navbar from 'components/navbar';
import TaskList from 'components/tasks_list';
import TaskCreator from 'components/task_creator';
import { useState, useEffect } from 'react';
import { Main, Greeting, ActualDate, Text } from 'styles/dashboard.styles';
import { varsDashPage } from 'styles/variants';
import { destroyCookie, parseCookies } from 'nookies';
import { getTasksOfCurrentUser, getUser, completeTask } from 'services/api';
import { useRouter } from 'next/router';

function getGreeting(greetings) {
	const time = new Date().getHours();
	if (time < 5) {
		return greetings[0];
	} else if (time >= 5 && time < 8) {
		return greetings[1];
	} else if (time >= 8 && time < 12) {
		return greetings[2];
	} else if (time >= 12 && time < 19) {
		return greetings[3];
	} else if (time >= 19) {
		return greetings[4];
	}
}

function showDate(locale, date) {
	const tmpDate = date;
	const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(
		new Date()
	);
	const weekday = new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(
		new Date()
	);
	const day = new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(
		new Date()
	);
	const formatDate = tmpDate
		.replace('weekday', weekday)
		.replace('month', month)
		.replace(/\bday\b/, day);
	return formatDate;
}

function DashboardPage({ serverTasks, user, t }) {
	const router = useRouter();
	const [tasks, setTasks] = useState(serverTasks);
	const [greeting, setGreeting] = useState(getGreeting(t.greetings));

	useEffect(() => {
		const interval = setInterval(() => {
			setGreeting(getGreeting(t.greetings));
		}, 5000);
		return () => clearInterval(interval);
	}, [greeting]);

	const taskCompleted = task => {
		const { _id: id } = task;
		const newTasks = tasks.filter(({ _id: idItem }) => idItem !== id);
		setTimeout(async () => {
			const { 'auth-token': authToken } = parseCookies(null);
			await completeTask(authToken, {
				identifier: user.username,
				taskIdentifier: id
			});
			setTasks(newTasks);
		}, 1000);
	};

	return (
		<>
			<Head>
				<title>To-do List | {user.name}</title>
			</Head>
			<Navbar
				user={user}
				{...{ links: t.links, navbarButton: t.navbarButton }}
			/>
			<Main
				initial='initial'
				animate='animate'
				exit='exit'
				variants={varsDashPage}
			>
				<Greeting>
					{greeting}, {user.name}
				</Greeting>
				<ActualDate>{showDate(router.locale, t.date)}</ActualDate>
				{tasks.length > 0 && (
					<Text>
						{t.countTasks[0]} <strong>{tasks.length}</strong> {t.countTasks[1]}
					</Text>
				)}
				{!tasks.length && <Text>{t.p} 😉</Text>}
				<TaskCreator
					placeholder={t.phTaskCreator}
					tasks={tasks}
					setTasks={setTasks}
				/>
				<TaskList tasks={tasks} action={taskCompleted} />
			</Main>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { 'auth-token': authToken, identifier } = parseCookies(ctx, {
		path: '/'
	});
	let serverTasks = [];
	let user = {};
	const { error, hasProfileData, profile } = await getUser(
		identifier,
		authToken
	);
	if (hasProfileData) {
		user = { ...profile };
		const { hasExistedTasks, tasks } = await getTasksOfCurrentUser(
			identifier,
			authToken
		);
		if (hasExistedTasks) {
			serverTasks = [...tasks];
		}
	} else {
		destroyCookie(ctx, 'identifier', { path: '/' });
		destroyCookie(ctx, 'auth-token', { path: '/' });
		console.log(error);
	}
	return {
		props: {
			serverTasks,
			user
		}
	};
}

export default DashboardPage;
