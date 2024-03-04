import { useStateValue } from "../../../context/StateProvider";

const LoginPage = () => {
  const [{}, dispatch] = useStateValue();
  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "SET_USER",
            user: {
              accessToken: "sample-token",
              name: "John Sammy",
            },
          });
        }}
      >
        Login Here
      </button>
    </>
  );
};

export default LoginPage;
