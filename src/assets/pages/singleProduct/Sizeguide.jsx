import styled from "styled-components";

const Sizeguide = () => {
  return (
    <Wrapper>
      <h5>Size Guide - Men's</h5>
      <table>
        <thead>
          <tr>
            <th className="bcgColor">US</th>
            <th className="bcgColor">EU</th>
            <th className="bcgColor">UK</th>
            <th className="bcgColor">JP</th>
            <th className="bcgColor">BR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7</td>
            <td>40</td>
            <td>6.5</td>
            <td>25</td>
            <td>37</td>
          </tr>
          <tr>
            <td className="bcgColor">7.5</td>
            <td className="bcgColor">40.5</td>
            <td className="bcgColor">7</td>
            <td className="bcgColor">25.5</td>
            <td className="bcgColor">38</td>
          </tr>
          <tr>
            <td>8</td>
            <td>41</td>
            <td>7.5</td>
            <td>26</td>
            <td>39</td>
          </tr>
          <tr>
            <td className="bcgColor">9</td>
            <td className="bcgColor">42.5</td>
            <td className="bcgColor">8.5</td>
            <td className="bcgColor">27</td>
            <td className="bcgColor">40</td>
          </tr>
          <tr>
            <td>9.5</td>
            <td>43</td>
            <td>9</td>
            <td>27.5</td>
            <td>41</td>
          </tr>
          <tr>
            <td className="bcgColor">10</td>
            <td className="bcgColor">44</td>
            <td className="bcgColor">9.5</td>
            <td className="bcgColor">28</td>
            <td className="bcgColor">41.5</td>
          </tr>
          <tr>
            <td>10.5</td>
            <td>44.5</td>
            <td>10</td>
            <td>28.5</td>
            <td>42</td>
          </tr>
          <tr>
            <td className="bcgColor">11</td>
            <td className="bcgColor">45</td>
            <td className="bcgColor">10.5</td>
            <td className="bcgColor">29</td>
            <td className="bcgColor">42.5</td>
          </tr>
          <tr>
            <td>11.5</td>
            <td>46</td>
            <td>11</td>
            <td>29.5</td>
            <td>43</td>
          </tr>
          <tr>
            <td className="bcgColor">12</td>
            <td className="bcgColor">47</td>
            <td className="bcgColor">11.5</td>
            <td className="bcgColor">30</td>
            <td className="bcgColor">44</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h5 {
    color: #484747;
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  table {
    width: 60rem;
    height: 50rem;
    border-collapse: separate;
    border-spacing: 0.4rem;
    .bcgColor {
      background-color: #eae2e092;
    }
    th {
      height: 4rem;
      color: #484747;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    td {
      background-color: #faf8f8;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      text-align: center;
      vertical-align: middle;
      color: #484747;
    }
  }
`;
export default Sizeguide;
