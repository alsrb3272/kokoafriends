import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    secondColor: string;
    accentColor: string;
    boxColor: string;
    mobile: string;
    tablet: string;
    desktop: string;
  }
}
