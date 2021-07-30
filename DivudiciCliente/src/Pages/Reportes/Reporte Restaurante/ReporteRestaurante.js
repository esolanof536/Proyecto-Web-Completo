import React from 'react'
import "./ReporteRestaurante.css";
import { LeftCircleTwoTone, RightCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons"

export default function ReporteRestaurante() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerRepRes">
                            <br />
                            <br />
                            <h2 class="listLabel">Reporte de Restaurante</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://icons-for-free.com/iconfiles/png/512/dinner+eat+eating+food+kitchen+restaurant+icon-1320086191755611454.png" alt="" id="imgListRepRes" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm">
                    <div className="row">
                        <div class="col-sm">
                            <textarea name="" id="reporteSistema" cols="151" rows="30">

                            </textarea>
                            <br /><br />
                            <div id="buttonReport">

                                <LeftCircleTwoTone twoToneColor="#780028" id="leftResRep" />

                                <RightCircleTwoTone twoToneColor="#780028" id="rightResRep" />

                                <CloseCircleTwoTone twoToneColor="#780028" id="closeResRep" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}