import React from 'react'
import "./ReporteSistema.css";
import { LeftCircleTwoTone, RightCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons"


export default function ReporteSistema() {
    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerRepSis">
                            <br />
                            <br />
                            <h2 class="listLabel">Reporte de Ayuda de Sistema</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://quanexus.com/wp-content/uploads/2018/08/Info-icon-06.png" alt="" id="imgListRepSis" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm">
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
        </>
    )
}