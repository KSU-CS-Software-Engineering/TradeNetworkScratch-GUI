import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import styles from './preview-modal.css';

const messages = defineMessages({
    label: {
        id: 'gui.previewInfo.label',
        defaultMessage: 'Try Scratch 3.0',
        description: 'Scratch 3.0 modal label - for accessibility'
    },
    previewWelcome: {
        defaultMessage: 'Welcome to the Scratch 3.0 Beta',
        description: 'Header for Preview Info Modal',
        id: 'gui.previewInfo.welcome'
    }
});

const PreviewModal = ({intl, ...props}) => (
    <ReactModal
        isOpen
        className={styles.modalContent}
        contentLabel={intl.formatMessage({...messages.label})}
        overlayClassName={styles.modalOverlay}
        onRequestClose={props.onTryIt}
    >
        <div dir={props.isRtl ? 'rtl' : 'ltr'} >
            <Box className={styles.body}>
                <h2>
                    <FormattedMessage
                        defaultMessage="Welcome to Trade Route Simulator! Click anywhere to continue."
                        description="Header for Beta Info Modal"
                        id="gui.previewInfo.betawelcome"
                    />
                </h2>
            </Box>
        </div>
    </ReactModal>
);

PreviewModal.propTypes = {
    intl: intlShape.isRequired,
    isRtl: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
    onTryIt: PropTypes.func.isRequired,
    onViewProject: PropTypes.func.isRequired
};

export default injectIntl(PreviewModal);
