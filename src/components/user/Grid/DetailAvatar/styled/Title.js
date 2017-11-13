import styled from 'styled-components';

const PrimaryTitle = styled.span`
    display: block;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
`;

const SecondaryTitle = PrimaryTitle.extend`
    font-weight: 400;
    color: grey;
`;

export default Primary;
export const Primary = PrimaryTitle;
export const Secondary = SecondaryTitle;