import React, { useEffect, useState } from "react";
import { useTheme } from '@react-navigation/native';
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import { gql, useQuery } from 'urql';
import { graphql } from '../gql';

const SpacesQueryDocument = graphql(/* GraphQL */ `
  query Spaces($first: Int!) {
    spaces(
      first: $first,
      skip: 0,
      orderBy: "created",
      orderDirection: asc
      ) {
        id
        name
        about
        network
        symbol
        strategies {
          name
          params
        }
        admins
        members
        filters {
          minScore
          onlyMembers
        }
        plugins
      }
    }
  }
`);


const Item = ({ item, onPress, backgroundColor, textColor, isSelected } : any) => (
  // 禁用点击
  <TouchableOpacity disabled onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    
  </TouchableOpacity>
);

export default function Home(props: any) {
  const { colors } = useTheme();
  const [spaceArr, setSpaceArr] = useState<any>(null);
  
  // `data` is typed!
  const [{ data }] = useQuery({
    query: SpacesQueryDocument as any,
    variables: { first: 10 },
  });
  
  useEffect(() => {
    const handleSpaces = async () => {
      console.debug('✅ [handleSpaces] ');
      // setSpaceArr(data.spaces);

    };
    if (!spaceArr) {
      console.debug('✅ [Home] get data spaceArr = ', spaceArr);
      // handleSpaces();
    }
    
  }, [spaceArr]);


  const renderItem = ({ item } : any) => {
    return (
      <Item
        item={item}
        textColor={{ color: colors.text }}
      />
    );
  };
  
  return (
    <FlatList
      data={spaceArr}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      // extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    lineHeight: 28,
    fontSize: 16,
  },
});