import { Button, Container, TextField } from "@mui/material";
import styles from "./Main.module.css";
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';

const Main = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    window.location.href=`http://wa.me/91${data.number}`;
  };
  return (
    <div>
      <div className={styles.wavecontainer}>
        <div className={styles.wave}></div>
      </div>
      <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.textcontainer}>
          <TextField
            id="outlined-basic"
            label="Phone no"
            type="number"
            variant="outlined"
            {...register("number", { required: true,pattern:/(7|8|9)\d{9}/ })}
          />
        </div>
        <div className={styles.buttoncontainer}>
          <Button type="submit" variant="text" endIcon={<SendIcon />}>
           Send Message
          </Button>
        </div>
      </form>
      </Container>
    </div>
  );
};

export default Main;
