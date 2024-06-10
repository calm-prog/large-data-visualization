import { ResponseData } from "../client";

export const createChunksOfAverage = (data: ResponseData): ResponseData => {
    // Keep items at 20 to maintain visual overview
    const chunkSize = Math.floor(data.length / 20)
    const result = [];
    
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      const timestamp = chunk[chunk.length-1].timestamp;
      const avgValue = chunk.reduce((acc, item) => acc + item.value, 0) / chunk.length;
      
      result.push({ timestamp, value: avgValue });
    }
    
    return result;
  }
  