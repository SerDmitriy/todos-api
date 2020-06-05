import { RestService } from 'helpers/rest/rest-service';
import { Endpoint } from 'environment/endpoints';
import { conformArrayResponse } from 'helpers/validation/general-validation';
import { PositionsArrayValid } from 'models/validation-models/positions';
import { IBasePosition, IPosition } from 'models/positions/positions.model';

export class PositionsApi {
  static async getPositionList() {
    const config = {
      url: `${Endpoint.positions}`,
    };
    return await conformArrayResponse(RestService.get(config), PositionsArrayValid);
  }

  static async addPosition(position: IBasePosition) {
    const config = {
      url: `${Endpoint.positions}`,
      data: position,
    };
    await RestService.post(config);
  }

  static async updatePosition(position: IPosition) {
    const config = {
      url: `${Endpoint.positionsId(position.id)}`,
      data: position,
    };
    await RestService.put(config);
  }

  static async deletePosition(id: number) {
    const config = {
      url: `${Endpoint.positionsId(id)}`,
    };
    await RestService.delete(config);
  }
}
