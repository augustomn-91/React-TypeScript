import MessageButton from '../messageButton'
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function Card() {

    const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));
    const [maxDate, setMaxDate] = useState(new Date());


    return (
        <div className="proj-card">
            <h2 className="proj-sales-title">Vendas por Fornecedor</h2>
            <div>
                <div className="proj-form-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="proj-form-date"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="proj-form-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="proj-form-date"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <table className="proj-form-table">
                        <thead>
                            <tr>
                                <th className="sumir992">Id</th>
                                <th className="sumir576">Data</th>
                                <th>Fornecedor</th>
                                <th className="sumir992">Visitas</th>
                                <th className="sumir992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="sumir992">
                                    <div className="proj-namevalue-container">
                                        #001
                                    </div>
                                </td>
                                <td className="sumir576">
                                    <div className="proj-namevalue-container">
                                        08/07/2022
                                    </div>
                                </td>
                                <td>
                                    <div className="proj-namevalue-container">
                                        Anakin
                                    </div>
                                </td>
                                <td className="sumir992">
                                    <div className="proj-namevalue-container">
                                        7
                                    </div>
                                </td>
                                <td className="sumir992">
                                    <div className="proj-namevalue-container">
                                        12
                                    </div>
                                </td>
                                <td>
                                    <div className="proj-namevalue-container">
                                        R$ 7.000,00
                                    </div>
                                </td>
                                <td>
                                    <div className="proj-red-btn-container">
                                        <MessageButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Card