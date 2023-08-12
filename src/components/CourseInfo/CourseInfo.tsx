import React from 'react';

import { Button } from '../../common/Button/Button';

import { CourseInfoProps } from './CourseInfo.types';

import './courseinfo.scss';

export const CourseCard: React.FC<CourseInfoProps> = (props) => <h1>TEST</h1>;

function fakeClick() {
	console.log('clicked');
}
