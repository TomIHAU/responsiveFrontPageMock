import React from "react";

import { GiWorld } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactLinks() {
  return (
    <div className="contactLinks">
      <table>
        <tr>
          <th>Contact Us</th>
          <th>Sitemap</th>
          <th>Support</th>
        </tr>
        <tr>
          <td>
            <GiWorld /> {` `}
            Unit 1-26 Radley Street Virginia, QLD 4014
          </td>
          <td>About Us</td>
          <td>30 Day Credit Application Form</td>
        </tr>
        <tr>
          <td>
            <BiPhoneCall /> {` `}Ph: 1300 789 912
          </td>
          <td>Products</td>
          <td>Returns Form</td>
        </tr>
        <tr>
          <td>
            <FaFax /> {` `}Fax: 07 3262 9068
          </td>
          <td>Contact Us</td>
          <td>FAQs</td>
        </tr>
        <tr>
          <td>
            <AiOutlineMail /> {` `}Email: info@q-imaging.com.au
          </td>
        </tr>
      </table>
    </div>
  );
}
