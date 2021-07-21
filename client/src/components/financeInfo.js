import React from "react";

import { Form, Input, Select, InputNumber, Tooltip, string, onChange } from "antd";

// const { Option } = Select;


export default function FinanceInfo() {
  return (
    <>
      <Form.Item
        style={{marginTop: "20px" }}
        label="Таны сарын тогтмол орлого"
        name="monthIncome"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <InputNumber  
               style={{ width: 150 }}
               defaultValue={10000000}
               formatter={value => ` ${value}₮`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")}
       />
      </Form.Item>
      <Form.Item
        style={{marginTop: "20px" }}
        label="Таны сарын тогтмол зардал"
        name="monthExpense"
        rules={[{ required: true, message: "Заавал бөглөнө үү" }]}
      >
        <InputNumber
        style={{ width: 150 }}
      defaultValue={1000000}
      formatter={value => ` ${value}₮`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      // parser={value => value.replace(/\$\s?|(,*)/g, '')}
    />
        {/* <InputNumber defaultValue="1'000'000" span={10}  suffix="₮"  InputNumber style={{ marginLeft: "50px"}} /> */}
      </Form.Item>
    </>
  );
}
// function FinanceInfo(value) {
//   value += '';
//   const list = value.split('.');
//   const prefix = list[0].charAt(0) === '-' ? '-' : '';
//   let num = prefix ? list[0].slice(1) : list[0];
//   let result = '';
//   while (num.length > 3) {
//     result = `,${num.slice(-3)}${result}`;
//     num = num.slice(0, num.length - 3);
//   }
//   if (num) {
//     result = num + result;
//   }
//   return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
// }

// class NumericInput extends React.Component {
//   onChange = e => {
//     const { value } = e.target;
//     const reg = /^-?\d*(\.\d*)?$/;
//     if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
//       this.props.onChange(value);
//     }
//   };

//   // '.' at the end or only '-' in the input box.
//   onBlur = () => {
//     const { value, onBlur, onChange } = this.props;
//     let valueTemp = value;
//     if (value.charAt(value.length - 1) === '.' || value === '-') {
//       valueTemp = value.slice(0, -1);
//     }
//     onChange(valueTemp.replace(/0*(\d+)/, '$1'));
//     if (onBlur) {
//       onBlur();
//     }
//   };

//   render() {
//     const { value } = this.props;
//     const title = value ? (
//       <span className="numeric-input-title">{value !== '-' ? FinanceInfo(value) : '-'}</span>
//     ) : (
//       'Input a number'
//     );
//     return (
//       <Tooltip
//         trigger={['focus']}
//         title={title}
//         placement="topLeft"
//         overlayClassName="numeric-input"
//       >
//         <Input
//           {...this.props}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//           placeholder="Input a number"
//           maxLength={25}
//         />
//       </Tooltip>
//     );
//   }
// }

// class NumericInputDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };
//   }

//   onChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     return (
//       <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
//     );
//   }
// }

