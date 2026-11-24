const { createApp } = Vue;

createApp({
    data() {
        return {
            ciclo: '',
            numeroFicha: '',
            opcion1: '',
            opcion2: '',
            opcion3: '',
            curp: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            nombre: '',
            sexo: '',
            turno: '',
            edad: '',
            diaNacimiento: '',
            mesNacimiento: '',
            anioNacimiento: '',
            secProcedencia: '',
            secEgreso: '',
            anioConclusionSec: '',
            promedioSec: '',
            entidadSec: '',
            nombrePadreTutor: '',
            calleNumero: '',
            colonia: '',
            codigoPostal: '',
            delegacionMunicipio: '',
            telefono1: '',
            telefono2: '',
            entidadFederativa: '',
            ciudad: '',
            fechaHoraExamen: '',
            aula: '',
            alumnos: []
        };
    },
    methods: {
        registrarAlumno() {
            this.alumnos.push({
                ciclo: this.ciclo,
                numeroFicha: this.numeroFicha,
                opcion1: this.opcion1,
                opcion2: this.opcion2,
                opcion3: this.opcion3,
                curp: this.curp,
                apellidoPaterno: this.apellidoPaterno,
                apellidoMaterno: this.apellidoMaterno,
                nombre: this.nombre,
                sexo: this.sexo,
                turno: this.turno,
                edad: this.edad,
                diaNacimiento: this.diaNacimiento,
                mesNacimiento: this.mesNacimiento,
                anioNacimiento: this.anioNacimiento,
                secProcedencia: this.secProcedencia,
                secEgreso: this.secEgreso,
                anioConclusionSec: this.anioConclusionSec,
                promedioSec: this.promedioSec,
                entidadSec: this.entidadSec,
                nombrePadreTutor: this.nombrePadreTutor,
                calleNumero: this.calleNumero,
                colonia: this.colonia,
                codigoPostal: this.codigoPostal,
                delegacionMunicipio: this.delegacionMunicipio,
                telefono1: this.telefono1,
                telefono2: this.telefono2,
                entidadFederativa: this.entidadFederativa,
                ciudad: this.ciudad,
                fechaHoraExamen: this.fechaHoraExamen,
                aula: this.aula
            });

            // Limpiar campos
            this.numeroFicha = '';
            this.curp = '';
            this.apellidoPaterno = '';
            this.apellidoMaterno = '';
            this.nombre = '';
            this.edad = '';
            this.diaNacimiento = '';
            this.mesNacimiento = '';
            this.anioNacimiento = '';
        }
    }
}).mount('#app');