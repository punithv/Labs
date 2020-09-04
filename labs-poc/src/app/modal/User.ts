export class activetime{
    start_time:string;
    end_time:string;

}
export class user{
    id:string;
    real_name:string;
    tz:string;
    activity_periods:activetime[];
    
}