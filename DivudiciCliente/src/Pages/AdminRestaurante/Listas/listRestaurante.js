import React, { useState, useEffect } from 'react';
import "../ListasEstilos/listRestaurante.css";
import { getResApi } from "../../../Api/restaurante";

export default function ListRestaurantes() {


    return (

        <>
            <div className="row">
                <div className="col-2">
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-sm" id="bannerVino">
                            <br />
                            <br />
                            <h2 class="listLabel">Lista de Vinos</h2>
                            <div class="row">
                                <div id="circle-background">
                                    <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/wine-icon.png"
                                        alt="" id="imgWine" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="row-row-cols-lg-6">

                    </div>
                </div>
            </div>
        </>

    )
}