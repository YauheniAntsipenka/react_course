import React from 'react';

import { Button } from '../../common/Button/Button';

import { CourseInfoProps } from './CourseInfo.types';

import './courseinfo.scss';

export const CourseInfo: React.FC<CourseInfoProps> = (props) => {
	let courseToShow = props.courseCard;
	return (
		<>
			<div className='courseInfoBody'>
				<div className='courseInfoGeneral'>
					<div className='courseInfoGeneralTitle'>
						<h2>{courseToShow.title}</h2>
					</div>
					<div className='courseInfoNote'>
						<div className='courseInfoCard'>
							<div className='courseInfoDescription'>
								<div className='courseInfoDescriptionElements'>
									<h3>
										Description: <br />
									</h3>
									<span>{courseToShow.description}</span>
								</div>
							</div>
							<div className='courseInfoSeparator'></div>
							<div className='courseInfoAdditionalInfoGeneralGroupWithCategories'>
								<div className='courseInfoAdditionalInfoGroup'>
									<div className='courseInfoAdditionalInfoIdGroup'>
										<span className='courseInfoAdditionalInfoCategoryName'>
											ID:
										</span>
									</div>
									<div className='courseInfoAdditionalInfoDurationGroup'>
										<span className='courseInfoAdditionalInfoCategoryName'>
											Duration:
										</span>
									</div>
									<div className='courseInfoAdditionalInfoCreationDateGroup'>
										<span className='courseInfoAdditionalInfoCategoryName'>
											Created:
										</span>
									</div>
									<div className='courseInfoAdditionalInfoAuthorsGroup'>
										<span className='courseInfoAdditionalInfoCategoryName'>
											Authors:
										</span>
									</div>
								</div>
							</div>
							<div className='courseInfoAdditionalInfoGeneralGroupWithValues'>
								<div className='courseInfoAdditionalInfoGroup'>
									<div className='courseInfoAdditionalInfoIdGroup'>
										<span>{courseToShow.id}</span>
									</div>
									<div className='courseInfoAdditionalInfoDurationGroup'>
										<span>{courseToShow.duration}</span>
									</div>
									<div className='courseInfoAdditionalInfoCreationDateGroup'>
										<span>{courseToShow.creationDate}</span>
									</div>
									<div className='courseInfoAdditionalInfoAuthorsGroup'>
										<span>{courseToShow.duration}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='courseInfoAdditionalInfoButtonsGroup'>
						<Button
							text='BACK'
							onClickFunction={() => {
								props.changeState('start', '');
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
