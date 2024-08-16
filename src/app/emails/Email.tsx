import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function Email( { body }: { body: string } ) {
  return (
    <Html>
      <p>{body}</p>
    </Html>
  );
}
