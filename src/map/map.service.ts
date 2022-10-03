// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { from, Observable } from 'rxjs';
// import { Repository } from 'typeorm';
// import { CreateMapDto } from './dto/create-map.dto';
// import { UpdateMapDto } from './dto/update-map.dto';
// import { Map } from './entities/map.entity';
// // import { MapInterface} from './map.interface';

// @Injectable()
// export class MapService {

//   constructor (
//     @InjectRepository(Map)
//     private readonly mapRepository: Repository<Map>
// ) {}
  
  
// async createParcel(CreateMapDto: Map): Promise<any> {
//   // const data = {
//   //   // type: 'geometry',
//   //   coordinates: [createParcelPointDto.geometry],
//   //   name: createParcelPointDto.name
//   // }
//   // console.log(data)
//   const map = this.map.create(createParcelPointDto)
//   //  const map = this.map.create({ name: createParcelPointDto.name, data })
//   // console.log(map)
//   await this.map.save(map)
//   // return map
// }
// // create(createMapDto: CreateMapDto) {
// //   return 'This action adds a new map';
// // }

// // create(CreateMapDto: MapInterface): Observable<MapInterface> {
// //   return from(this.mapRepository.save(CreateMapDto))
// // }

// // create(mapModel: Map) {
// //     return from(this.mapRepository.save(mapModel));
// //   }

//   findAll() {
//     return `This action returns all map`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} map`;
//   }

//   update(id: number, updateMapDto: UpdateMapDto) {
//     return `This action updates a #${id} map`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} map`;
//   }
// }




import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Map } from './entities/map.entity'
import { Repository } from 'typeorm';
import { from } from 'rxjs';
@Injectable()
export class MapService {
  constructor(@InjectRepository(Map) private readonly map: Repository<Map>) { }
  // async createParcel(createParcelPointDto: Map): Promise<any> {
  //   // const data = {
  //   //   // type: 'geometry',
  //   //   coordinates: [createParcelPointDto.geometry],
  //   //   name: createParcelPointDto.name
  //   // }
  //   // console.log(data)
  //   const map = this.map.create(createParcelPointDto)
  //   //  const map = this.map.create({ name: createParcelPointDto.name, data })
  //   // console.log(map)
  //   await this.map.save(map)
  //   // return map
  // }
  create(createMapDto: CreateMapDto) {
    return 'This action adds a new map';
  }

 findAll() {
    return from(this.map.find())
  }
  

  async createGeom(geomdatamap: Map): Promise<any> {
    console.log("this is come from mao service", geomdatamap)
    let data = {
      name: geomdatamap.name,
      desc: geomdatamap.desc,
      color: geomdatamap.color,
      geom: geomdatamap.geom.geometry
    }
    console.log("This data form from after destructuring", data)
    const map = this.map.create(data)
    await this.map.save(map)
  }



  // findAll(findData:CreateMapDto) {
  //   return `This action returns all map`;
  // }
  findOne(id: number) {
    return `This action returns a #${id} map`;
  }
  update(id: number, updateMapDto: UpdateMapDto) {
    return `This action updates a #${id} map`;
  }
  remove(id: number) {
    return `This action removes a #${id} map`;
  }
}
