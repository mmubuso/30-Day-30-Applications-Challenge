import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { shareListingBySMS } from '../../service/API';


type Props = {
    onClose: () => void,
    listingId: string,
};

function ShareListingDialog({ listingId, onClose }: Props) {
    const [phoneNumber, changePhoneNumber] = React.useState('');

    function cleanPhoneNumberValue(newPhoneNumberValue) {
        const cleanNumber = newPhoneNumberValue.replace(/[^0-9]/, '');
        changePhoneNumber(cleanNumber);
    }
    function sendSMS() {
        // TODO: phone number validation
        shareListingBySMS(phoneNumber, listingId);
        // lets close dialog after sending out message
        onClose();
    }

    return (
        <Dialog open={true} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Enter your phone number</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    ... and we'll text you this link
            </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="phoneNubmer"
                    label="Phone Number"
                    type="string"
                    fullWidth
                    onChange={(e) => cleanPhoneNumberValue(e.target.value)}
                    value={phoneNumber}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={sendSMS} color="primary">
                    Send
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export {
    ShareListingDialog
};