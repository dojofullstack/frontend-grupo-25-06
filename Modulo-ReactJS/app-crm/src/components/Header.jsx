import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context";
import useStore from "../useStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();


  const {theme, changeTheme} = useContext(ThemeContext);


  const perfil = useStore((state) => state.perfil);
  const isLogin = useStore((state) => state.isLogin);
  const authUserMe = useStore((state) => state.authUserMe);


  console.log(perfil);
  console.log(isLogin);
  //  console.log(changeTheme);


  const getToken = () => {
    const accessToken = localStorage.getItem("access");
    if (accessToken){
        // validar si el token esta activo
        return accessToken
    }
}




   useEffect(() => {

      const accessToken = getToken();

      if (accessToken || isLogin){
        authUserMe();
      } else {
        navigate("/login");
      }

  }, []);

  


  return (
    <>
      <header   >
        <div className="navbar bg-base-100" style={{ backgroundColor: theme }}>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>

          <div>
            <button className="btn btn-accent" onClick={() =>  changeTheme("green") }>
              Cambiar Tema
            </button>
          </div>

          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>

            {isLogin && perfil &&
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Perfil
                    <span className="badge bg-dark">{perfil.username}</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Cerrar sesion</a>
                </li>
              </ul>
            </div>
              }

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
