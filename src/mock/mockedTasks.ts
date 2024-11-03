export const mockedTasks = Array.from({ length: 500 }, (_, index) => ({
  id: index + 1,
  description: `Description for Task ${index + 1}.`,
}));
