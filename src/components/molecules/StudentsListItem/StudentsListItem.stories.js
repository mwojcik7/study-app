import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const mockData = {
  name: 'Adam Romański',
  attendance: '55%',
  average: '0.0',
};

const Template = (args) => <StudentsListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: mockData,
};

export const BadGrade = Template.bind({});
BadGrade.args = {
  userData: { ...mockData, average: '2.0' },
};

export const MediumGrade = Template.bind({});
MediumGrade.args = {
  userData: { ...mockData, average: '4.0' },
};

export const GoodGrade = Template.bind({});
GoodGrade.args = {
  userData: { ...mockData, average: '5.0' },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: { ...mockData, average: null },
};
