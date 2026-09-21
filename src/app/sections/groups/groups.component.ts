import {Component, OnInit} from '@angular/core';
import {ExcelService} from '../../services/excel.service';

@Component({
    selector: 'app-landing',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    gruposOriginal: any[] = [];
    gruposFiltrados: any[] = [];
    filtroGrupo: string = '';
    pageSize: number = 12;
    currentPage: number = 1;

    constructor(private excelService: ExcelService) {}

    ngOnInit(): void {
        this.excelService.readExcelFile('/assets/data/Grupos_66.xlsx').then((excelData: any[]) => {
            this.gruposOriginal = excelData.map(g => ({
                ...g,
                taller1: g['TALLER 1'] || 'No Convocado',
                taller2: g['TALLER 2'] || 'No Convocado',
                taller3: g['TALLER 3'] || 'No Convocado',
                taller4: g['TALLER 4'] || 'No Convocado',
                taller5: g['TALLER 5'] || 'No Convocado',
                taller6: g['TALLER 6'] || 'No Convocado',
                expandido: false
            }));
            this.gruposFiltrados = [...this.gruposOriginal];
        }).catch(err => {
            console.error('Error al cargar datos de Excel:', err);
        });
    }

    filtrar(): void {
        const filtro = this.filtroGrupo.toLowerCase().trim();
        this.gruposFiltrados = this.gruposOriginal.filter(grupo =>
            grupo.NOMBRE?.toLowerCase().includes(filtro) ||
            grupo.CORREO?.toLowerCase().includes(filtro) ||
            (grupo.CEDULA || grupo['CÉDULA'])?.toString().includes(filtro)
        );
        this.currentPage = 1;
    }

    get totalPages(): number {
        return Math.ceil(this.gruposFiltrados.length / this.pageSize);
    }

    get gruposPaginados(): any[] {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        return this.gruposFiltrados.slice(startIndex, startIndex + this.pageSize);
    }

    cambiarPagina(pagina: number): void {
        if (pagina >= 1 && pagina <= this.totalPages) {
            this.currentPage = pagina;
        }
    }

    paginaAnterior(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    paginaSiguiente(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }
}


