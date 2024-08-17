import { Body, Font, Head, Html, Tailwind } from "@react-email/components";
import * as React from "react";

export default function ContactEmail( { body }: { body: string } ) {
  const record = JSON.parse(body);
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
            <h3>A Potential Client Wants To Connect With You!</h3>
            <h4>Contact Info:</h4>
            <ul>
                {Object.keys(record).map((key, index) => <li key={index}><b>{key}</b>: {record[key]}</li>)}
            </ul>
          </div>
        </Body>
      </Html>
    </Tailwind>
    )
}
