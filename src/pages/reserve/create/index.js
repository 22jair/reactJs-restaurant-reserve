import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../../utils/Utils";
import { CartGlobalContext } from "../../../context/contextCart/CartGlobalState";
import { UserGlobalContext } from "../../../context/contextUser/UserGlobalState";
import LocalDataPaymentType from "./../../../localData/PaymentType";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as style from "./index.style";

export default function ReserveCreate(props) {
  const { cart, resetMenus } = useContext(CartGlobalContext);
  const { user } = useContext(UserGlobalContext);

  const [startedDate, setStartedDate] = useState(null);

  const [hours, setHours] = useState({
    data: [],
    loading: true,
  });
  const [tables, setTables] = useState({
    data: [],
    loading: true,
  });

  const [reserve, setReserve] = useState({
    usuarioId: user.id,
    horaId: 0,
    mesaId: 0,
    fechaReserva: null,
    tipoPago: "1",
    personasTotal: 1,

    montoTotal: 0,
    menuReservas: [],
  });

  // useEffect(() =>{ console.log("Page -> Reserve -> Create -> index")})
  useEffect(() => {
    getHours();
    getTables();
    //el comentario de abajo ayuda a quitar el warning que marca en cart
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //console.log("useEffect | createIndexReserve");
    //console.log(cart.total, cart.menus.length)
    if (cart.total > 0 && cart.menus.length > 0) {
      transFormCart(cart);
      setReserve({ ...reserve, montoTotal: cart.total });
    }
    //el comentario de abajo ayuda a quitar el warning que marca en cart
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const transFormCart = async (cart) => {
    const menusTransform = await cart.menus.map((menu) => {
      return {
        cantidad: menu.quantity,
        pagoCantidad: menu.total,
        platoId: menu.plate.id,
      };
    });
    setReserve({
      ...reserve,
      menuReservas: menusTransform,
      montoTotal: cart.total,
    });
  };

  const getHours = async () => {
    setHours({ ...hours, loading: true });
    const data = await fetch(BASE_URL + "horas");
    if (data.status === 200) {
      data.json().then(async (res) => {
        const dataTransf = await res.map((item) => {
          return { id: item.horaId, name: item.hora, desc: item.descripcion };
        });
        setHours({ data: dataTransf, loading: false });
      });
    }
  };
  const getTables = async () => {
    setTables({ ...tables, loading: true });
    const data = await fetch(BASE_URL + "mesas");
    if (data.status === 200) {
      data.json().then(async (res) => {
        const dataTransf = await res.map((item) => {
          return { id: item.mesaId, name: item.numero, desc: item.descripcion };
        });
        setTables({ data: dataTransf, loading: false });
      });
    }
  };

  const addDay = (date, n) => {
    return date.setDate(date.getDate() + n);
  };

  const handleReserveDate = (date) => {
    if (date != null) {
      const fechaReserva = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      setStartedDate(date);
      setReserve({ ...reserve, fechaReserva });      
    }
  };

  const handleQuantityPeople = (e) => {
    setReserve({ ...reserve, personasTotal: e.target.value });
  };
  const handlePaymentType = (e) => {
    setReserve({ ...reserve, tipoPago: e.target.value });
  };

  const handleMakeReserve = async () => {
    if (reserve.fechaReserva == null) return alert("Ingrese una Fecha");
    if (reserve.horaId <= 0) return alert("Seleccione Hora");
    if (reserve.mesaId <= 0) return alert("Seleccione Mesa");
    if (reserve.personasTotal <= 0)
      return alert("Cantidad de personas deber ser almenos 1");
   
   console.log(reserve);

    const data = await fetch(BASE_URL+"reservas/save",
                        {
                            method: "POST",
                            body: JSON.stringify(reserve),
                            headers:{
                                'Content-Type': 'application/json'
                              }
                        });

    if(data.status === 201){
        console.log(data.json().then( res => { 
          console.log(res)
          alert("Reserva Id: " + res.reservaId)          
          resetMenus();
          props.history.push('/menus')         
         }))
    }else if(data.status === 400){
        console.log("Error en la creación")
        console.log(data)
    }
  };

  return (
    <style.MenuContainer>
      reserva crear
      {/* fecha */}
      <div>
        <label>Fecha</label>
        <br />
        <DatePicker
          selected={startedDate}
          //   startDate={addDay(new Date(), 2)}
          minDate={addDay(new Date(), 2)}
          maxDate={addDay(new Date(), 100)}
          onChange={(date) => handleReserveDate(date)}
          placeholderText="Seleccione"
          dateFormat="y-M-d"
          //   showDisabledMonthNavigation
        />
      </div>
      {/* horas */}
      <div>
        <label>Hora</label>
        <br />
        {hours.data.length <= 0 ? (
          "No hay horas"
        ) : (
          <select
            value={reserve.horaId}
            onChange={(e) =>
              setReserve({ ...reserve, horaId: parseInt(e.target.value) })
            }
          >
            <option key={0} value={0}>Seleccione</option>
            {hours.data.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        )}
        <br />
      </div>
      {/* mesas */}
      <div>
        <label>Mesa</label>
        <br />
        {tables.data.length <= 0 ? (
          "No hay mesas"
        ) : (
          <select
            value={reserve.mesaId}
            onChange={(e) =>
              setReserve({ ...reserve, mesaId: parseInt(e.target.value) })
            }
          >
            <option key={0} value={0}>Seleccione</option>
            {tables.data.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        )}
        <br />
      </div>
      {/* Cantidad personas */}
      <div>
        <label>Cantidad de Personas</label>
        <br />
        <input
          type="number"
          value={reserve.personasTotal}
          onChange={(e) => handleQuantityPeople(e)}
        />
      </div>
      {/* metodo pago */}
      <div>
        <label>Metodo de Pago</label>
        <br />
        {LocalDataPaymentType.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <input
                type="radio"
                value={item.id}
                checked={reserve.tipoPago === item.id}
                onChange={(e) => handlePaymentType(e)}
              />
            </div>
          );
        })}
      </div>
      
      <button onClick={() => handleMakeReserve()}>Realizar Reserva</button>
      {/* {console.log("Reserva, hour, tables Data: " , reserve, hours, tables)} */}
    </style.MenuContainer>
  );
}
