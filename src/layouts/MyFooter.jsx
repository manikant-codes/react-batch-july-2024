import React from "react";
import { COMPANY_NAME, LOGO } from "../consts/consts";
import { Footer } from "flowbite-react";

function MyFooter() {
  return (
    <Footer container className="border-t">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={LOGO}
            alt={COMPANY_NAME}
            name={COMPANY_NAME}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by={COMPANY_NAME} year={2022} />
      </div>
    </Footer>
  );
}

export default MyFooter;
