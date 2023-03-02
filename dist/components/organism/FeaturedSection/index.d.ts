import { ReactElement, ReactNode } from 'react';
interface Props {
    number: {
        text: ReactNode;
        className: string;
    };
    content: {
        preheading: string;
        heading: string;
        paragraph: string;
    };
    button: ReactNode;
    badge: {
        title: string;
        content: string;
    };
    image: string | ReactNode;
}
declare function FeaturedSection({ number, content, button, badge, image }: Props): ReactElement;
export default FeaturedSection;
