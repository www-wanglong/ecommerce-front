import React from 'react';
import { Typography, List, Radio } from 'antd';
import prices from '../../helpers/price'
import { RadioChangeEvent } from 'antd/lib/radio';

interface Props {
  handleFilter: (price: number[]) => void
}

function RadioBox({ handleFilter }: Props) {

  const onChange = (event: RadioChangeEvent) => {
    handleFilter(event.target.value)
  }

  return (
    <>
      <Typography.Title level={4}>按照价格筛选</Typography.Title>
      <Radio.Group>
        <List
          dataSource={prices}
          renderItem={item => (
            <List.Item>
              <Radio onChange={onChange} value={item.array}>{item.name}</Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  );
}

export default RadioBox;
