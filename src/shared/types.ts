export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus'
  }

  export interface  Benefits {
    icon: JSX.Element;
    title: string;
    desc: string
  }