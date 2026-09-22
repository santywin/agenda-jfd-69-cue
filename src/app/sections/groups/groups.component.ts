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
        this.excelService.readExcelFile('assets/data/Grupos_66.xlsx').then((excelData: any[]) => {
            this.gruposOriginal = excelData.map(g => ({
                ...g,
                taller1: this.getTallerValue(g, 1),
                taller2: this.getTallerValue(g, 2),
                taller3: this.getTallerValue(g, 3),
                taller4: this.getTallerValue(g, 4),
                taller5: this.getTallerValue(g, 5),
                taller6: this.getTallerValue(g, 6),
                expandido: false
            }));
            this.gruposFiltrados = [...this.gruposOriginal];
        }).catch(err => {
            console.error('Error al cargar datos de Excel:', err);
        });
    }

    private getTallerValue(row: any, num: number): string {
        const key = Object.keys(row).find(k => {
            const normalized = k.trim().toUpperCase();
            return normalized.startsWith(`TALLER ${num}`) || normalized.startsWith(`TALLER${num}`);
        });
        const val = key ? row[key] : null;
        return (val && String(val).trim() !== '') ? String(val).trim() : 'No Convocado';
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


