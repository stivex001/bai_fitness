export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface Benefits {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface classType {
  name: string;
  desc?: string;
  image: string;
}
