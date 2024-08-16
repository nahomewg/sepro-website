import { Font, Html, Tailwind } from "@react-email/components";
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
      <Html className="h-full">
        <style>{`body { margin: 0; height: 100% }`}</style>
        <Font fontFamily="Roboto" fallbackFontFamily={"Arial"}/>
        <div className="flex flex-col bg-black w-full h-full">
          <div className="flex bg-orange rounded-b-xl justify-center items-center w-full h-20">
            <h2 className="text-center text-white m-0">Hello Sebastien!</h2>
          </div>
          <div className="px-10 py-5 mt-8 bg-white rounded-xl left-0 right-0 mx-auto w-3/4">
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
        </div>
      </Html>
    </Tailwind>
  );
}
