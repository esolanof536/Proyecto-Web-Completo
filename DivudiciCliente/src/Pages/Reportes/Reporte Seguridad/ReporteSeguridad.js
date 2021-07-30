import React from 'react'
import "./ReporteSeguridad.css";
import { LeftCircleTwoTone, RightCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons"

export default function ReporteSeguridad() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerRepSeg">
                            <br />
                            <br />
                            <h2 class="listLabel">Reporte de Ayuda de Seguridad</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://www.jing.fm/clipimg/full/114-1149846_data-security-icon-emblem.png" alt="" id="imgListRepSeg" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm">
                    <div className="row">
                        <div class="col-sm">
                            <textarea name="" id="reporteSistema" cols="151" rows="30"></textarea>
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