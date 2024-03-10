import { SectionWrapper, SubTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionWrapper title={title}>
      {title && <SubTitle>{title}</SubTitle>}
      {children}
    </SectionWrapper>
  );
}
