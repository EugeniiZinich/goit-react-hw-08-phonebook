import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useAuth } from 'components/hooks/useAuth';

export const SubscriptionRadio = ({ subscription, editSubscr }) => {
  const { isLoggedIn } = useAuth();

  const handleSubscr = e => {
    if (isLoggedIn) return;
    subscription(e.target.value);
  };

  return (
    <FormControl onChange={handleSubscr}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Subscription
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={e => editSubscr(e.target.value)}
      >
        <FormControlLabel value="starter" control={<Radio />} label="Starter" />
        <FormControlLabel value="pro" control={<Radio />} label="Pro" />
        <FormControlLabel
          value="business"
          control={<Radio />}
          label="Business"
        />
      </RadioGroup>
    </FormControl>
  );
};
