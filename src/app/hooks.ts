import { TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type { RootState, AppDispatch } from "./store";

type DispatchFunc = () => AppDispatch
// hook to get Redux dispatsh function(sends actions to my reducers)
export const useAppDispatch:DispatchFunc = useDispatch;
// select and read data from my redux store 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector