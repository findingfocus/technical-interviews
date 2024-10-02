--
-- Complete the 'birthdayCakeCandles' function below.
--
-- The function is expected to return an INTEGER.
-- The function accepts INTEGER_ARRAY candles as parameter.
--

function birthdayCakeCandles(candles)
  local tallest = 0
  for k, v in ipairs(candles) do
    if (v > tallest) then
      tallest = v    
    end
  end
   
   local count = 0
   for k, v in ipairs(candles) do
    if (v == tallest) then
     count = count + 1
    end
   end
   
   return count
end

local fptr = io.open(os.getenv("OUTPUT_PATH"), "w")

local candlescount = io.stdin:read("*n", "*l")

local candles = {}

for token in string.gmatch(io.stdin:read("*l"):gsub("%s+$", ""), "[^%s]+") do
    table.insert(candles, tonumber(token))
end

local result = birthdayCakeCandles(candles)

fptr:write(result, "\n")

fptr:close()
