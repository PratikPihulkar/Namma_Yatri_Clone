import { Component } from '@angular/core';
import internal from 'stream';

@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrl: './ten.component.css'
})
export class TenComponent {

  qaList=[
    {
      question:"How is Namma Yatri helpful for customers?",
      answer:"Namma Yatri is a long term sustainable solution for the city's mobility requirements. Radical tech and marketing innovations will reduce overall costs and its benefits will flow to customers and drivers. And having an open roadmap and using the open beckn protocol will further improve the efficiency (Eg. Open maps), affordability (Eg. batching / sharing) and interoperability (Eg. integrating with public transport)."
      ,flag:false
    },
    {
      question:"Who owns the Namma Yatri app?",
      answer:"Moving Tech Innovations Private Limited owns the app. It has built and is operating the app for the drivers. It is built following the beckn open protocol. The vision is to build a sustainable long-term mobility solution that enables the service providers (drivers). The goal is to let both drivers and customers win together.There is a plan to set up an open collective with representatives from both citizens and the driver community to own pricing and policy related decisions."
      ,flag:false
    },
    {
      question:"What is Juspay's investment in this so far?",
      answer:"We have been working on this for the last 3+ years, first building it for Kochi (Yatri App) and now Namma Yatri for Bengaluru. It is part of our ecosystem initiatives like BHIM UPI and OCEN (Open Credit Enablement Network). In addition to building the technology, we have invested in operating and marketing the app with the support of the driver community. Juspay has invested in digital and offline marketing initiatives (ATL, BTL, Google, Facebook etc) for Namma Yatri."
      ,flag:false
    },
    {
      question:"What is the monetisation strategy for Namma Yatri?",
      answer:"The core innovation in this initiative is radically reducing the cost structure of the critical components like maps, cloud, operations & marketing. This is helping us to convert from a high commission based model to a very nominal subscription fee for the drivers, similar to a mobile recharge. Right now, the platform is free and we will start charging the nominal subscription fee within a couple of months."
      ,flag:false
    },
    {
      question:"What is ARDU's involvement?",
      answer:"FIDE facilitated the collaboration between ARDU and Juspay, leading to a mutual agreement among all parties to develop and promote an app similar to the successful Kochi Yatri app for Bengaluru Autos. ARDU representatives have given their inputs, helped in setting pricing policies and volunteered to facilitate a pilot program . The beta version was announced by ARDU in the press in Nov 2022. However, Namma Yatri is not affiliated to any specific union and caters to all drivers irrespective of the affiliations, emphasizing a community-driven solution."
      ,flag:false
    },
    {
      question:"How about the involvement of other unions apart from ARDU?",
      answer:"Namma Yatri follows the pricing guidelines of the Karnataka Government. Mr Rudramurthy and Mr Pattabiram helped with their inputs on defining Rs.10 pickup charge and the framework for nominal driver request. In the future, the open collective, with representatives from both citizens and the driver community, will decide the pricing policy as per the government guidelines."
      ,flag:false
    },
    {
      question:"How is Namma Yatri pricing compared to other apps?",
      answer:"Namma Yatri follows the pricing guidelines of the Karnataka Government. In the current pricing structure, Namma Yatri is cheaper than other apps for longer distances. For shorter distances, the pricing could be higher due to pickup charges (Rs 10) and additional driver requests. We are working on arriving at a fair pricing that is customer-friendly and aligned to the efforts of the driver."
      ,flag:false
    },
    {
      question:"What is the driver availability across the city?",
      answer:"We have a good coverage of drivers across the city and the driver availability data (by location) is openly shared as part of our open-data initiative on Namma Yatri website. We already have 43,000 drivers on the platform and are organically growing everyday. We hope the coverage and density of drivers will improve with more awareness."
      ,flag:false
    },
    {
      question:"How do you handle cancellation issues?",
      answer:"Cancellations typically happen from both customers and drivers. As per mobility experts, driver cancellation rates are the lowest in Namma Yatri. While we can't completely eliminate genuine cancellations, we intend to reduce it by improving the product (UI/UX, matching algorithms, in-app chat etc) and implementing a self-regulated mechanism of a trust score (both for customers and drivers) which incorporates the cancellation rates. We are also working with drivers to launch a special service for zones like Metro and hospitals where drivers commit to not cancel."
      ,flag:false
    },
    
  ]



  
 
      //  this.qaList[index].flag= !this.qaList[index].flag;

  
  selectedAnswerIndex: number | null = 0;

  toggleAnswer(index: number): void {
    this.selectedAnswerIndex = this.selectedAnswerIndex === index ? null : index;
  }

}
