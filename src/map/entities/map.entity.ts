// // import { Column,  Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
// // import { Point, Polygon } from 'geojson'

// // @Entity('map')
// // export class Map {
// //     @PrimaryGeneratedColumn()
// //     id: number;
// //     @Column()
// //     Name: string;
// //     @Column()
// //     Description:string;
// //     @Column()
// //     color:string;
// //     // geom:geometry;
// //     // @Index({ spatial: true })
// //     @Column({
// //         type: 'geometry',
// //         spatialFeatureType: 'Polygon',
// //         // srid: 4326,
// //         srid: 3857,

// //         nullable: true,
// //     })
// //     geom: Polygon;

// // }


// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import { GeoJSON } from "geojson"
// import { IsOptional } from "class-validator";
// @Entity({ name: "geodata" })
// export class Map {
//     @PrimaryGeneratedColumn()
//     id: number
//     @Column({ nullable: true })
//     name: string;
//     @Column({ nullable: true })
//     description: string
//     @Column({
//         type: 'geometry',
//         //name: 'geom',
//         spatialFeatureType: 'geometry',
//         srid: 4326,
//         nullable: true
//     })
//     geom: GeoJSON;
//     // @IsOptional()
//     // geometry?: number[][];
// }
import { UnprocessableEntityException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GeoJSON } from "geojson"
import { IsOptional } from "class-validator";
import { json } from "stream/consumers";
@Entity({ name: "geodata" })
export class Map {
    @PrimaryGeneratedColumn()
    id: number
    // @Column({ nullable: true })
    // type: string;
    @Column({ nullable: true })
    name: string
    @Column({ nullable: true })
    color: string
    @Column({ nullable: true })
    desc: string
    // @Column({ nullable: true, type: "json" })
    // properties: any
    @Column({
        type: 'geometry',
        //name: 'geom',
        spatialFeatureType: 'geometry',
        srid: 4326,
        nullable: true
    })
    geom: GeoJSON;
    // @IsOptional()
    // geometry?: number[][];
}