'use client';

import { Todo } from '@/types/Todo';
import { useState } from 'react';
import { IcArrowDown, Plus } from '@/assets/svgs';
import ProgressBar from '../ProgressBar/ProgressBar';
import ListTodoProgress from './ListTodoProgress';
import { Goal } from '@/types/Goal';
import Modal from '../Modal/Modal';
import NoteRead from '@/components/Note/NoteRead';
import { useGetQuery } from '@/queries/query';
import ConfirmPopup from '../Popup/ConfirmPopup';
import { useListTodo } from '@/hooks/useListTodo';

export default function CardGoal({ goal, index }: { goal: Goal; index: number }) {
  const {
    isLoading,
    confirmRef,
    confirm,
    handleDeleteConfirmClick,
    noteRef,
    noteData,
    onClose,
    isOpen,
    modalType,
    todo,
    todoResponse,
    handleListPopupClick,
    onOpen,
    error,
    setModalType,
  } = useListTodo(goal.id);
  const [isMore, setIsMore] = useState(false);

  const { data: progressData, isLoading: ProgressisLoading } = useGetQuery.progress(goal.id);

  const todoList = todoResponse?.todos.filter((todo: Todo) => todo.done === false);
  const doneList = todoResponse?.todos.filter((todo: Todo) => todo.done === true);

  const handleMoreClick = () => {
    setIsMore(!isMore);
  };

  const handleAddTodo = () => {
    setModalType('create');
    onOpen();
  };

  const isMoreFive = () => todoList.length > 5 || doneList.length > 5;
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading data</h2>;

  return (
    <>
      <ConfirmPopup
        type='popup'
        dialogRef={confirmRef}
        confirmText={confirm.message}
        onConfirmClick={handleDeleteConfirmClick}
        confirm
      />
      <NoteRead dialogRef={noteRef} data={noteData} />
      <Modal onClose={onClose} isOpen={isOpen} modalType={modalType} items={todo} />

      <div
        className={`flex w-full p-6 flex-col ${isMoreFive() ? 'h-full' : 'h-[310px]'}  gap-4 justify-start bg-blue-50 rounded-[32px] ${index === 2 && 'col-span-2'}`}
      >
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h1 className='text-lg font-bold'>{goal.title}</h1>
            <button className='flex items-center gap-1 text-sm font-semibold text-blue-500' onClick={handleAddTodo}>
              <Plus strokeColor='currentColor' className='w-4 h-4' />
              할일 추가
            </button>
          </div>
          <ProgressBar value={ProgressisLoading ? 0 : progressData?.progress} />
        </div>
        <div className='grid grid-cols-2 gap-6 '>
          <ListTodoProgress
            displayTodoCount={isMore ? 10 : 5}
            subject='To do'
            itemList={todoList}
            onUpdateList={handleListPopupClick}
            textValue={'아직 해야할 일이 없어요'}
          />
          <ListTodoProgress
            displayTodoCount={isMore ? 10 : 5}
            subject='Done'
            itemList={doneList}
            onUpdateList={handleListPopupClick}
            textValue={'아직 다 한 일이 없어요'}
          />
        </div>
        {(todoList.length > 5 || doneList.length > 5) && (
          <div className='flex justify-center min-h-0'>
            <button
              className='flex items-center justify-center text-xs font-semibold py-1 gap-2 bg-white pr-[21px] pl-[36px] rounded-2xl'
              onClick={handleMoreClick}
            >
              {isMore ? '접기' : '더보기'}
              <IcArrowDown className={`duration-300 w-6 h-6 ${isMore && 'rotate-180'}`} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
