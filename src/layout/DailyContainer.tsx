import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const DailyContainerDiv = styled.div`
  position: relative;
  width: 185.3px;
  min-height: 340px;
  padding-top: 20px;
  background: var(--color-white);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: inherit;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  top: 40px;
`;

export const DailyContainer = (props: Props) => (
  <DailyContainerDiv>
    <HorizontalLine />
    {props.children}
  </DailyContainerDiv>
);
