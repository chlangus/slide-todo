export const mockUser = {
  id: 1,
  email: 'test@example.com',
  name: 'Test User',
  createdAt: '2024-07-18T07:06:25.789Z',
  updatedAt: '2024-07-18T07:06:25.789Z',
};

export const mockNoteList = {
  notes: [
    {
      todo: {
        done: true,
        title: 'First Todo',
        id: 1,
      },
      updatedAt: '2024-07-18T07:07:55.875Z',
      createdAt: '2024-07-18T07:07:55.875Z',
      title: 'First Note',
      id: 1,
      goal: {
        title: 'First Goal',
        id: 1,
      },
      userId: 1,
      teamId: 'team1',
    },
    {
      todo: {
        done: false,
        title: 'Second Todo',
        id: 2,
      },
      updatedAt: '2024-07-18T08:00:00.000Z',
      createdAt: '2024-07-18T08:00:00.000Z',
      title: 'Second Note',
      id: 2,
      goal: {
        title: 'Second Goal',
        id: 2,
      },
      userId: 2,
      teamId: 'team2',
    },
    {
      todo: {
        done: true,
        title: 'Third Todo',
        id: 3,
      },
      updatedAt: '2024-07-18T09:00:00.000Z',
      createdAt: '2024-07-18T09:00:00.000Z',
      title: 'Third Note',
      id: 3,
      goal: {
        title: 'Third Goal',
        id: 3,
      },
      userId: 3,
      teamId: 'team3',
    },
  ],
};

export const mockTodoList = {
  todos: [
    {
      noteId: 1,
      done: true,
      linkUrl: 'https://example.com/link1',
      fileUrl: 'https://example.com/file1',
      title: 'First Todo',
      id: 1,
      goal: {
        id: 1,
        title: 'First Goal',
      },
      userId: 1,
      teamId: 'team1',
      updatedAt: '2024-07-18T07:07:11.522Z',
      createdAt: '2024-07-18T07:07:11.522Z',
    },
    {
      noteId: 2,
      done: false,
      linkUrl: 'https://example.com/link2',
      fileUrl: 'https://example.com/file2',
      title: 'Second Todo',
      id: 2,
      goal: {
        id: 2,
        title: 'Second Goal',
      },
      userId: 2,
      teamId: 'team2',
      updatedAt: '2024-07-18T08:00:00.000Z',
      createdAt: '2024-07-18T08:00:00.000Z',
    },
    {
      noteId: 3,
      done: true,
      linkUrl: 'https://example.com/link3',
      fileUrl: 'https://example.com/file3',
      title: 'Third Todo',
      id: 3,
      goal: {
        id: 3,
        title: 'Third Goal',
      },
      userId: 3,
      teamId: 'team3',
      updatedAt: '2024-07-18T09:00:00.000Z',
      createdAt: '2024-07-18T09:00:00.000Z',
    },
  ],
};

export const mockGoalList = {
  goals: [
    {
      updatedAt: '2024-07-18T07:09:58.195Z',
      createdAt: '2024-07-18T07:09:58.195Z',
      title: 'First Goal',
      id: 1,
      userId: 1,
      teamId: 'team1',
    },
    {
      updatedAt: '2024-07-18T08:10:00.000Z',
      createdAt: '2024-07-18T08:10:00.000Z',
      title: 'Second Goal',
      id: 2,
      userId: 2,
      teamId: 'team2',
    },
    {
      updatedAt: '2024-07-18T09:11:00.000Z',
      createdAt: '2024-07-18T09:11:00.000Z',
      title: 'Third Goal',
      id: 3,
      userId: 3,
      teamId: 'team3',
    },
    {
      updatedAt: '2024-07-18T09:11:00.000Z',
      createdAt: '2024-07-18T09:11:00.000Z',
      title: 'Fourth Goal',
      id: 4,
      userId: 4,
      teamId: 'team4',
    },
  ],
};

export const mockProgress = { progress: 0 };