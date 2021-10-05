import { Typography, List, Checkbox as AntdCheckbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/actions/category.actions';
import { AppState } from '../../store/reducers';
import { CategoryState } from '../../store/reducers/category.reducer';

interface Props {
  handleFilter: (filters: string[]) => void
}

function CheckBox({ handleFilter }: Props) {

  const dispatch = useDispatch()

  const { category: { result } } = useSelector<AppState, CategoryState>(state => state.category)

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const onChange = (checkedValue: CheckboxValueType[]) => {
    handleFilter(checkedValue as string[])
  }

  return (
    <>
      <Typography.Title level={4}>按分类筛选</Typography.Title>
      <AntdCheckbox.Group
        className="checkbox-filter"
        options={result.map( item => ({label: item.name, value: item._id}))}
        onChange={onChange}
      />
    </>
  );
}

export default CheckBox;
