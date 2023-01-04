import Checkbox from 'components/checkbox';
import { varsTask } from 'styles/variants';
import { Container, Text } from './task.styles';
import { useEffect, useRef, useState } from 'react';
import { HiBriefcase, HiHome, HiUser } from 'react-icons/hi';

const ICONS_BY_CATEGORY = {
	work: HiBriefcase,
	personal: HiUser,
	home: HiHome
};

export default function Task({ text, category, taskCompleted, isMobile }) {
	const [checked, setChecked] = useState(false);
	const textRef = useRef(null);
	const Icon = ICONS_BY_CATEGORY[category];

	useEffect(() => {
		checked && taskCompleted();
	}, [checked]);

	const handleChange = () => {
		!checked && setChecked(true);
	};

	return (
		<Container
			whileHover={isMobile ? '' : 'hovered'}
			initial={isMobile ? 'animate' : 'initial'}
			animate='animate'
			exit='exit'
			variants={varsTask}
		>
			<Checkbox checked={checked} size={21} onChange={handleChange} />
			<div>
				<Text ref={textRef} checked={checked}>
					{text}
				</Text>
			</div>
			<Icon size={21} />
		</Container>
	);
}
