import React from 'react';
import PropTypes from 'prop-types';
import {Line, DetailBlock, Container} from './styled/Containers';
import {DetailField as F, Normal as V} from './styled/Text';

const ExtendedDetails = ({userDetails, className}) => {
    return (
        <Container className={className}>
            <DetailBlock dashed>
                <Line><F>מס' אישי:</F><V>{userDetails.id}</V></Line>
                <Line><F>תעודת זהות:</F><V>{userDetails.passport}</V></Line>
                <Line><F>דרגה:</F><V>{userDetails.rank}</V></Line>
                <Line><F>סיווג:</F><V>{userDetails.clasification}</V></Line>
            </DetailBlock>
            <DetailBlock>
                <Line><F>טלפון:</F><V>{userDetails.phone}</V></Line>
                <Line><F>נייד:</F><V>{userDetails.mobile}</V></Line>
                <Line><F>דוא"ל:</F><V>{userDetails.mail}</V></Line>
                <Line><F>כתובת:</F><V>{userDetails.address}</V></Line>
            </DetailBlock>
        </Container>
    );
};

ExtendedDetails.propTypes = {
    userDetails: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default ExtendedDetails;