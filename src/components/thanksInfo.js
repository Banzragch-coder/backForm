import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
// import {dark} from '@ant-design/dark-theme';


export default function ThanksInfo() {
  return (
    <>
         <Result
    icon={<SmileOutlined />}
    title="Таны хүсэлтийг хүлээн авлаа. Бид удахгүй таньтай утсаар холбогдох болно"
  />
    </>
  );
}


