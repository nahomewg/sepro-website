import { Body, Font, Head, Html, Tailwind } from "@react-email/components";
import * as React from "react";

export default function QuizEmail( { body }: { body: string } ) {
  const record = JSON.parse(body);
  const filteredRecord = Object.fromEntries(Object.entries(record).filter(([key]) => key !== 'Email' && key !== 'Name'));
  return (
    <Tailwind 
    config={{
      theme: {
        extend: {
          colors: {
            'orange': '#F28A12',
          }
        }
      }
    }}>
      <Html>
        <Head />
        <Font fontFamily="Roboto" fallbackFontFamily={"Arial"}/>
        <Body>
          <div>
            <h2>Hello Sebastien!</h2>
            <h3>A Potential Client Has Submitted A Quiz!</h3>
            <h4>Contact Info:</h4>
            <ul>
              <li>Name: {record['Name']}</li>
              <li>Email: {record['Email']}</li>
            </ul>
            <h4>Quiz Results:</h4>
            <ul>
              {Object.keys(filteredRecord).map((key, index) => <li key={index}><b>{key}</b>: {record[key]}</li>)}
            </ul>
          </div>
        </Body>
      </Html>
    </Tailwind>
    )
}
