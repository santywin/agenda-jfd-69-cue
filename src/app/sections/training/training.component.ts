import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute} from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-profile',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})

export class TrainingComponent implements OnInit {

    activeTab: string = 'tab1';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const tab = params['tab'];
            if (tab === 'tab2' || tab === 'tab3' || tab === 'tab4') {
                this.activeTab = tab;
            } else {
                this.activeTab = 'tab1';
            }
        });
    }

    showGroupInfoTaller1(): void {
        Swal.fire({
            html: `
                <div style="font-family: 'Fira Sans', sans-serif; padding: 0px;">
                    <div style="text-align: center; margin-bottom: 5px; margin-top: -10px;">
                        <span style="font-size: 25px; font-weight: 800; color: #003366; text-transform: uppercase;">
                            Taller 1
                        </span>
                    </div>

                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: separate; border-spacing: 0 8px;">
                            <thead>
                                <tr style="background-color: #003366; color: white;">
                                    <th style="padding: 8px; border-radius: 12px 0 0 12px; font-weight: 600; text-align: center; font-size: 12px;">Área de Conocimiento</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Grupo</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Facilitadores</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Grupo 1 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias Administrativas y Económicas
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 1
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Fabián Cuesta - Verónica Espinoza</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 1 Edificio Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 2 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencia y Tecnología - Ciencias Exactas
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 2
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Romel Rodas - Jack Bravo - Sheila Serrano - Fernando Soto</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Auditorio Leonidas Proaño
                                    </td>
                                </tr>

                                <!-- Grupo 3 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias de la Vida - Ciencias de la Salud
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 3
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Elena Coyago - Geovanna Zea - Dunia Ojeda</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Auditorio Luis Arba
                                    </td>
                                </tr>

                                <!-- Grupo 4 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias Sociales y del Comportamiento Humano - Educación - Razón y Fe
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 4
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Alicia Cedeño - Floralba Aguilar</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Auditorio Luna Tobar
                                    </td>
                                </tr>

                                <!-- Grupo 5 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Lengua Extranjera
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 5
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Magno Vivar</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 4 Edificio Guillermo Mensi
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            width: '950px',
            padding: '1.50rem',
            background: '#fff',
            showConfirmButton: true,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#003366',
            customClass: {
                popup: 'animated fadeInDown'
            }
        });
    }


        showGroupInfoTaller2(): void {
        Swal.fire({
            html: `
                <div style="font-family: 'Fira Sans', sans-serif; padding: 0px;">
                    <div style="text-align: center; margin-bottom: 5px; margin-top: -10px;">
                        <span style="font-size: 25px; font-weight: 800; color: #003366; text-transform: uppercase;">
                            Taller 2
                        </span>
                    </div>

                    <div style="overflow-x: auto; max-height: 500px; overflow-y: auto;">
                        <table style="width: 100%; border-collapse: separate; border-spacing: 0 8px;">
                            <thead style="position: sticky; top: 0; z-index: 10;">
                                <tr style="background-color: #003366; color: white;">
                                    <th style="padding: 8px; border-radius: 12px 0 0 12px; font-weight: 600; text-align: center; font-size: 12px;">Grupo</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Facilitador</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Grupo 1 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 1
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Dunia Ojeda
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 1 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 2 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 2
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Fabian Cuesta
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 4 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 3 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 3
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Alicia Cedeño
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 5 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 4 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 4
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Floralba Aguilar
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 6 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 5 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 5
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Sheila Serrano
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 7 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 6 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 6
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Romel Rodas
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 10 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 7 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 7
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Elena Coyago
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 13 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 8 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 8
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Jack Bravo
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 16 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 9 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 9
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Veronica Espinoza
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 18 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 10 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 10
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Geovanna Zea
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 19 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 11 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 11
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Fausto Saenz
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 20 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 12 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 12
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Gilberto Brito
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 21 Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 13 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 13
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #555;">
                                        Fernando Soto
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 15 Mario Rizzini
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            width: '850px',
            padding: '1.50rem',
            background: '#fff',
            showConfirmButton: true,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#003366',
            customClass: {
                popup: 'animated fadeInDown'
            }
        });
    }

    showGroupInfoTaller3(): void {
        Swal.fire({
            html: `
                <div style="font-family: 'Fira Sans', sans-serif; padding: 0px;">
                    <div style="text-align: center; margin-bottom: 5px; margin-top: -10px;">
                        <span style="font-size: 25px; font-weight: 800; color: #003366; text-transform: uppercase;">
                            Taller 3
                        </span>
                    </div>

                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: separate; border-spacing: 0 8px;">
                            <thead>
                                <tr style="background-color: #003366; color: white;">
                                    <th style="padding: 8px; border-radius: 12px 0 0 12px; font-weight: 600; text-align: center; font-size: 12px;">Área de Conocimiento</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Grupo</th>
                                    <th style="padding: 8px; font-weight: 600; text-align: center; font-size: 12px;">Facilitadores</th>
                                    <th style="padding: 8px; border-radius: 0 12px 12px 0; font-weight: 600; text-align: center; font-size: 12px;">Espacio Físico</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Grupo 1 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias Administrativas y Económicas
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 1
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Fabián Cuesta - Verónica Espinoza</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 1 Edificio Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 2 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencia y Tecnología - Ciencias Exactas
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 2
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Romel Rodas - Sheila Serrano - Fernando Soto</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Auditorio Leonidas Proaño
                                    </td>
                                </tr>

                                <!-- Grupo 3 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias de la Vida - Ciencias de la Salud
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 3
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Elena Coyago - Geovanna Zea</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Auditorio Luis Arba
                                    </td>
                                </tr>

                                <!-- Grupo 4 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Ciencias Sociales y del Comportamiento Humano
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 4
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Floralba Aguilar - Gilberto Brito</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 4 Edificio Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 5 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #003366; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Educación
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 5
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Alicia Cedeño - Fausto Sáenz</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 5 Edificio Guillermo Mensi
                                    </td>
                                </tr>

                                <!-- Grupo 6 -->
                                <tr style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <td style="padding: 10px; border-left: 6px solid #ffcc00; border-radius: 8px 0 0 8px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #333;">
                                        Razón y Fe
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: center; font-size: 11.5px; color: #003366; font-weight: bold; white-space: nowrap;">
                                        Grupo 6
                                    </td>
                                    <td style="padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left; font-size: 11.5px; color: #003366;">
                                        <strong>Dunia Ojeda - Merdardo Silva</strong>
                                    </td>
                                    <td style="padding: 10px; border-right: 1px solid #eee; border-top: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 8px 8px 0; text-align: left; font-size: 11.5px; font-weight: bold; color: #555;">
                                        Aula 6 Edificio Guillermo Mensi
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `,
            width: '950px',
            padding: '1.50rem',
            background: '#fff',
            showConfirmButton: true,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#003366',
            customClass: {
                popup: 'animated fadeInDown'
            }
        });
    }
}
