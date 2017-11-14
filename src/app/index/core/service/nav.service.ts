import {Injectable} from "@angular/core";
import {authorities} from "../authority.data";
const navData=authorities;
@Injectable()
export class NavService{
  getNavData(){
    return navData;
  }
}
