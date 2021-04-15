import React, { useEffect } from 'react';

import Typography from '@material-ui/core/Typography';

import './Calculations.scss';
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { requestCalculate } from '@features/libraryReducer';

import formula from '../../../../assets/fomula.png';

const Calculations = ({ children, ...rest }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCalculate);
    }, []);

    const dataCalc = useSelector((state) => state.library.dataCalc);

    console.log(dataCalc);

    return (
        <div className="Calculations">
            <Typography variant="h2" gutterBottom>
                Коэффициенты книгообеспеченности
            </Typography>
            <img src={formula}></img>
            <p>KOB - коэффициент книгообеспеченности дисциплины.</p>
            <p>
                n - количество наименований в списке основной рекомендуемой
                литературы по дисциплине.
            </p>
            <p>
                Qy<sub>i</sub> - соответствующее количество экземпляров изданий,
                рекомендованных для дисциплины из списка основной литературы.
            </p>
            <p>
                Qs<sub>t</sub> - количество студентов, изучающих дисциплину
            </p>

            {dataCalc.map((data) => (
                <div key={uuidv4()} className="calcItem">
                    <span>
                        {data.name} <b>KOB = {data.res}</b>
                    </span>
                    <br />
                    <span>
                        Qy<sub>i</sub> = {data.qyi}
                    </span>
                    <br />
                    <span>
                        Qs<sub>t</sub> = {data.qst}
                    </span>
                    <br />
                    <span>n = {data.n}</span>
                </div>
            ))}
        </div>
    );
};

export default Calculations;
